const multipleCommands: Record<string, Fig.Subcommand> = {
  install: {
    name: ["i", "install"],
    description: "Install ICD onto a development cluster.",
    args: [
      {
        name: "COMPONENT",
        description:
          " Either one of [control-plane, data-plane, monitoring, tooling-plane, vuln-mgmt] or one of the aliases [cp, db, tp].",
        isOptional: false,
      },
    ],
    options: [
      {
        name: "--baseline",
        description:
          " Path to your baseline (or set ICDFLOW_BASELINE_PATH)  [required]",
        isRequired: false,
        args: [
          {
            name: "PATH",
          },
        ],
      },
      {
        name: ["--dry-run", "--no-dry-run "],
        description:
          "Print out the commands that would be run but don't actually do anything",
      },
      {
        name: ["--diff", "--no-diff"],
        description:
          " Print out a diff of what helm would change if you had run it normally. Useful for verifying that you didn't unintentionally change anything.",
      },
      {
        name: ["--help", "-h"],
        description: "Show this help and exit",
      },
    ],
  },
  build: {
    name: ["b", "build"],
    description:
      " Build and push a docker image in a given directory. Uses the current directory by default.",
    options: [
      {
        name: "--baseline",
        description: "Path to your baseline (or set ICDFLOW_BASELINE_PATH)",
        isRequired: false,
        args: [
          {
            name: "ICDFLOW_BASELINE_PATH",
          },
        ],
      },
      {
        name: "--db-version",
        description:
          "The database version to build; e.g. `4.0.10`. If omitted, all database versions will be buil",
        isRequired: true,
        args: [
          {
            name: "DB_VERSION",
          },
        ],
      },
      {
        name: "--database",
        description:
          "The database name to build; e.g. `redis`. If omitted, all databases will be buil",
        isRequired: true,
        args: [
          {
            name: "DB_VERSION",
          },
        ],
      },
      {
        name: ["-i", "--image"],
        description:
          " The container image name to build; e.g. `mgmt`. If omitted, all container images will be built",
        isRequired: false,
        args: [
          {
            name: "IMAGE_NAME",
          },
        ],
      },
      {
        name: ["-f", "--file"],
        description:
          " Override to use alternate Dockerfile file; eg. `--file Dockerfile.local` Build a specific alternate Dockerfile; e.g. Dockerfile.local",
        isRequired: false,
        args: [
          {
            name: "DOCKER_FILE",
          },
        ],
      },
      {
        name: "--build-arg",
        description:
          "Pass custom build arguments. Used in the docker build stage. e.g. --build-arg <key>=<value>",
        isRequired: false,
        args: [
          {
            name: "KEY-VALUE",
          },
        ],
      },
      {
        name: ["--push", "--no-push"],
        description: "Whether or not to push the image to the registries",
        isRequired: false,
      },
      {
        name: ["--help", "-h"],
        description: "Show this help and exit",
      },
    ],
  },
};

const completionSpec: Fig.Spec = {
  name: "icdflow",
  description: "icdflow: A CLI tool for the IBM Cloud Databases workflow",
  subcommands: [multipleCommands.install, multipleCommands.build],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for icdflow",
    },
  ],
};
export default completionSpec;
