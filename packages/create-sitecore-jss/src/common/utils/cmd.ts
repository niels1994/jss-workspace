import spawn from 'cross-spawn';
import { SpawnSyncOptionsWithStringEncoding } from 'child_process';

/**
 * @param {string} command
 * @param {string[]} args
 * @param {SpawnSyncOptionsWithStringEncoding} options
 * @param {boolean} silent
 */
export const run = (
  command: string,
  args: string[],
  options?: SpawnSyncOptionsWithStringEncoding,
  silent?: boolean
) => {
  silent || console.log(`> ${command} ${args.join(' ')}`);
  spawnFunc(command, args, options);
};

/**
 * @param {string} command
 * @param {string[]} args
 * @param {SpawnSyncOptionsWithStringEncoding} options
 * @param {NodeJS.Process} parentProcess
 */
export const spawnFunc = (
  command: string,
  args: string[],
  options?: SpawnSyncOptionsWithStringEncoding,
  parentProcess?: NodeJS.Process
) => {
  const parent = parentProcess ?? process;

  // Use 'inherit' (better UX) when being run within a TTY context, use 'pipe' otherwise.
  // In most cases, TTY will be the case. However, when running inside of our dotnet template,
  // stderr is not TTY (will be a socket instead of a WriteStream) and commands such as
  // `npm install` will error out if using 'inherit' (and ultimately hang the parent process).
  const defaults = {
    stdio: [
      parent.stdin.isTTY ? 'inherit' : 'pipe',
      parent.stdout.isTTY ? 'inherit' : 'pipe',
      parent.stderr.isTTY ? 'inherit' : 'pipe',
    ],
  };
  const result = spawn.sync(command, args, Object.assign(defaults, options));

  if (result.signal === 'SIGKILL') {
    console.log(
      'The operation failed because the process exited too early. ' +
        'This probably means the system ran out of memory or someone called ' +
        '`kill -9` on the process.'
    );
  } else if (result.signal === 'SIGTERM') {
    console.log(
      'The operation failed because the process exited too early. ' +
        'Someone might have called `kill` or `killall`, or the system could ' +
        'be shutting down.'
    );
  }

  if (result.status && result.status > 0) {
    parent.exit(result.status);
  }
};
