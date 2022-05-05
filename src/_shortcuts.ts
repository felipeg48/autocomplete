const completionSpec: Fig.Spec = {
  name: "_shortcuts",
  description: "My Shortcuts",
  subcommands: [
    {
      name: "Add/Commit",
      icon: "fig://icon?type=github",
      description: "Add and commit",
      insertValue: "\b\bgit add . ; git commit -m 'updated'",
    },
  ],
};
export default completionSpec;
