const completionSpec: Fig.Spec = {
  name: "cdb",
  description:
    "cdb [-h] [-v] {describe,test,build,push,execute,serve,task,start,init,install,serve_metrics,metrics,supertenancy,version}",
  subcommands: [
    {
      name: "install",
      description:
        "Builds a Python package and installs it in one or more Containers of one or more Pods of a Formation. Optionally filtered by the role label of the Pods.",
      subcommands: [
        {
          name: ["-r", "--role"],
          description:
            "The value of the Role label to filter the Pods. Default: `m`",
          args: [
            {
              name: "ROLE ...",
            },
          ],
        },

        {
          name: ["-p", "--path"],
          description:
            "The path of the Python project to build. Default: the current directory",
          args: [
            {
              name: "PATH",
            },
          ],
        },

        {
          name: ["-n", "--namespace"],
          description:
            " The Namespace of the Formation. Default: the environment variable `NAMESPACE`",
          args: [
            {
              name: "NAMESPACE",
            },
          ],
        },

        {
          name: ["-c", "--comntainer"],
          description:
            "The name of the Container to install the Python package into. Default:`mgmt`",
          args: [
            {
              name: "CONTAINER",
            },
          ],
        },

        {
          name: ["-f", "--formation-id"],
          description:
            " The Formation ID to install the package into. Default: the environment variable `ID`",
          args: [
            {
              name: "ID",
            },
          ],
        },

        {
          name: ["-h", "--help"],
          description: "Shows this help and exit",
        },
      ],
    },
  ],
  options: [
    {
      name: "-v",
      description: "show program's version number and exit.",
    },
    {
      name: ["--help", "-h"],
      description: "Show help for cdb",
    },
  ],
};
export default completionSpec;
