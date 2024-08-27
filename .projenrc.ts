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
      roots: [`<rootDir>/src`],
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
   * Turn off the dev configuration for tsconfig be default.
   */
  //disableTsconfigDev: true,
});

/* VSCode configuration
export class VsCodeConfig extends Component {
  private vscode: VsCode;

  constructor(project: Project) {
    super(project);

    this.vscode = new VsCode(project);
  }

  preSynthesize(): void {
    super.preSynthesize();

    // VSCODE: Root level editor settings
    const vsSettings = new VsCodeSettings(this.vscode);
    vsSettings.addSetting("editor.tabSize", 2);
    vsSettings.addSetting("editor.bracketPairColorization.enabled", true);
    vsSettings.addSetting("editor.guides.bracketPairs", "active");
    vsSettings.addSetting("editor.rulers", [80, 120]);

    // use eslint to fix files for typescript files only
    vsSettings.addSetting(
      "editor.codeActionsOnSave",
      { "source.fixAll.eslint": "explicit" },
      "typescript",
    );

    // make sure each directory's eslint is found properly.
    vsSettings.addSetting("eslint.workingDirectories", [{ mode: "auto" }]);

    // VSCODE: extensions
    const vsExtensions = new VsCodeRecommendedExtensions(this.vscode);
    vsExtensions.addRecommendations("dbaeumer.vscode-eslint");
  }
}
new VsCodeConfig(project);
*/

project.synth();
