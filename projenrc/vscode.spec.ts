import { TypeScriptProject } from "projen/lib/typescript";
import { synthSnapshot } from "projen/lib/util/synth";
import { VsCode } from "projen/lib/vscode";

describe("Success Conditions", () => {
  it("snapshot should match", () => {
    const project = new TypeScriptProject({
      name: "foo",
      defaultReleaseBranch: "main",
    });
    new VsCode(project);

    const content = synthSnapshot(project);
    expect(content[".vscode/settings.json"]).toMatchSnapshot();
  });
});
