import { typescript } from "projen";
import { NodePackageManager, Transform } from "projen/lib/javascript";

const project = new typescript.TypeScriptProject({
  // project name
  name: "projen-examples",

  /*****************************************************************************
   *
   * GitHub Project Package
   *
   ****************************************************************************/

  /**
   * Don't use mergify.
   */
  githubOptions: {
    mergify: false,
  },

  /*****************************************************************************
   *
   * Node Package
   *
   ****************************************************************************/

  /**
   * No License
   */
  // licensed: false,

  /**
   * Use PNPM 9 for package management
   */
  packageManager: NodePackageManager.PNPM,
  pnpmVersion: "9",

  /**
   * Require modern LTS Node Version to run the app.
   */
  // minNodeVersion: "20.15.0",

  /*****************************************************************************
   *
   * Node Project
   *
   ****************************************************************************/

  /**
   * Use "main" instead of "master" as the root release branch.
   */
  defaultReleaseBranch: "main",

  /**
   * Turn on prettier to enable VS Code linting.
   */
  prettier: true,

  /**
   * Don't package
   */
  package: false,

  /**
   * Don't release to NPM
   */
  releaseToNpm: false,

  /**
   * Don't include package or release steps
   */
  release: false,

  /**
   * Don't create a build workflow
   */
  // buildWorkflow: false,

  /**
   * Disable Jest
   */
  // jest: false,

  /**
   * Jest config example.
   */
  jestOptions: {
    configFilePath: "jest.config.json",
    jestConfig: {
      roots: [`<rootDir>/src`, `<rootDir>/projenrc`],
      testMatch: [`**/*.spec.ts`],
      preset: "ts-jest",
      transform: {
        ["^.+\\.ts?$"]: new Transform("ts-jest"),
      },
      moduleFileExtensions: ["js", "ts"],
    },
  },

  /*****************************************************************************
   *
   * Typescript Project
   *
   ****************************************************************************/

  /**
   * Don't generate sample code
   */
  sampleCode: false,

  /**
   * Use Typescript version of projenrc file.
   */
  projenrcTs: true,

  /**
   * Turn off the dev configuration for tsconfig
   */
  //disableTsconfigDev: true,
});

// new VsCodeConfig(project);

project.synth();
