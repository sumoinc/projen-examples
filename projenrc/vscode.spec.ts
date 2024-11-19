import { TypeScriptProject } from "projen/lib/typescript";
import { synthSnapshot } from "projen/lib/util/synth";

describe("Success Conditions", () => {
  it("snapshot should match", () => {

    const project = new TypeScriptProject({
      name: "foo",
      defaultReleaseBranch: "main",
    });

    const content = synthSnapshot(project);
    expect(content[".vscode/settings.json"]).toMatchSnapshot();
  });
});
