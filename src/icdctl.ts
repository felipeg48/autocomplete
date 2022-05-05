const rabbitMQCommands: Record<string, Fig.Subcommand> = {
  rqcs: {
    name: "rqcs",
    description: "Display the status of a RabbitMQ cluster",
    args: {
      name: "MEMBER",
      description:
        "Which member to ask (e.g. m-0 or m-1). If none given, all will be tried",
      isOptional: true,
    },
  },
  rqfnl: {
    name: "rqfnl",
    description: "Restart the one node in cluster",
    options: [
      {
        name: ["-w", "--wait"],
        description: "Wait for the affected node to report being healthy",
      },
      {
        name: ["--help", "-h"],
        description: "Show this message and exit",
      },
    ],
  },
  rqsq: {
    name: "rqsq",
    description: "Detect and remove RabbitMQ undefined queues",
    args: [
      {
        name: "OPTIONS",
        isOptional: true,
      },
      {
        name: "POD",
        description: "Which pod to fix/check",
        isOptional: false,
      },
    ],
    options: [
      {
        name: "--check-only",
        description:
          "This will only check the undefined queues if the flag is presented, there will be no fix performed",
      },
      {
        name: ["--help", "-h"],
        description: "Show this message and exit",
      },
    ],
  },
  rquq: {
    name: "rquq",
    description: "Detect and remove RabbitMQ unresponsive queues",
    args: {
      name: "OPTIONS",
      isOptional: true,
    },
    options: [
      {
        name: "--check-only",
        description:
          "This will only check the unresponsive queues if the flag is presented, there will be no fix performed",
      },
      {
        name: ["--help", "-h"],
        description: "Show this message and exit",
      },
    ],
  },
  rqp: {
    name: "rqp",
    description: "Display the installed plugins",
    args: {
      name: "OPTIONS",
      isOptional: false,
    },
    options: [
      {
        name: ["-p", "--pod"],
        description: "Example: -p m-0",
        args: {
          name: "PODNAME",
        },
      },
      {
        name: ["--help", "-h"],
        description: "Show this message and exit",
      },
    ],
  },
  rqru: {
    name: "rqru",
    description: "Recovers the icd user so that is used for maintenance",
    args: {
      name: "OPTIONS",
      isOptional: false,
    },
    options: [
      {
        name: ["-p", "--pod"],
        description: "Example: -p m-0",
        args: {
          name: "PODNAME",
        },
      },
      {
        name: ["--help", "-h"],
        description: "Show this message and exit",
      },
    ],
  },
  rqrr: {
    name: "rqrr",
    description:
      "Restart all members in a RabbitMQ cluster. Members are restarted sequentially to not impact the availability of the DB. This function can be used to resolve partitioned clusters (aka split brain) and unresponsive queues",
    options: [
      {
        name: ["--help", "-h"],
        description: "Show this message and exit",
      },
    ],
  },
  rqui: {
    name: "rqui",
    description: "Launch a RabbitMQ Management UI of a formation",
    args: {
      name: "OPTIONS",
      isOptional: false,
    },
    options: [
      {
        name: ["-p", "--pod"],
        description: "Example: -p m-0",
        args: {
          name: "PODNAME",
        },
      },
      {
        name: ["-n", "--namespace"],
        description:
          "NAMESPACE:  If no namespace was given, it will be read from the  environment",
        args: {
          name: "NAMESPACE",
        },
        isRequired: false,
      },
      {
        name: ["--help", "-h"],
        description: "Show this message and exit",
      },
    ],
  },
};

const mongodbCommands: Record<string, Fig.Subcommand> = {
  moeui: {
    name: "moeui",
    description:
      "Open up the opsmanager console in webbrowser. Providing the login username and password in terminal.",
    options: [
      {
        name: "--help",
        description: "Sho this message and exit",
      },
    ],
  },
  moco: {
    name: "moco",
    description:
      "Connects directly as the internal user to the mongo replicationset.",
    args: {
      name: "OPTIONS",
      isOptional: false,
    },
    options: [
      {
        name: ["-p", "--pod"],
        description: "Example: -p m-0",
        args: {
          name: "PODNAME",
        },
      },
      {
        name: "--help",
        description: "Sho this message and exit",
      },
    ],
  },
};

const clusterCommands: Record<string, Fig.Subcommand> = {
  cl: {
    name: "cl",
    description:
      "Target an IBM Cloud Databases cluster. If no namespace was given compose- system will be used",
    options: [
      {
        name: ["-n", "--namespace"],
      },
      {
        name: "--discover",
      },
      ,
      {
        name: "--discover-account",
      },
      ,
      {
        name: "--help",
        description: "Sho this message and exit",
      },
    ],
    args: {
      name: "CLUSTER",
      isOptional: false,
      description:
        " The name of the cluster, e.g. `fed-db01`. Can be a fuzzy abbreviation of the intended cluster name, e.g. `gbcp` will select `icd-dev-eu-gb-cp-dku2b`",
    },
  },
};

const formationCommands: Record<string, Fig.Subcommand> = {
  f: {
    name: "f",
    description: "Locate and describe a formation",
    options: [
      {
        name: "--quiet",
      },
      {
        name: "--silent",
      },
      {
        name: "--help",
        description: "Sho this message and exit",
      },
    ],
    args: {
      name: "NAME",
      isOptional: true,
      description:
        "The formation's name, e.g.`60d14a87-901a-4fa5-be7d-bc8bef6bcc60`. If you have a CRN it's the rightmost UUID in the CRN's colon-separated list of identifiers.",
    },
  },
  fs: {
    name: "fs",
    description: "Display the most recent formations",
    args: [
      {
        name: "OPTIONS",
        isOptional: true,
      },
      {
        name:
          "enterprisedb|postgresql|etcd|mongodb|rabbitmq|cassandra|elasticsearch|redis|mysql",
        isOptional: true,
      },
    ],
    options: [
      {
        name: "--show-feature-flags",
      },
      {
        name: "--help",
        description: "Sho this message and exit",
      },
    ],
  },
};

const recipesCommands: Record<string, Fig.Subcommand> = {
  r: {
    name: "r",
    description: "Show the details of a recipe",
    options: [
      {
        name: "--help",
        description: "Sho this message and exit",
      },
    ],
    args: {
      name: "ID",
      isOptional: true,
      description:
        "The recipe's uuid identifier. Optional, defaults to the most recent recipe if not specified.",
    },
  },
  rs: {
    name: "rs",
    description: "Show the current formation's recipes",
    options: [
      {
        name: ["-a", "--all-namespaces"],
        description: "Show recipes from all name spaces",
      },
      {
        name: "-l",
        description: "Label",
        args: {
          name: "TEXT",
        },
      },
      {
        name: "--help",
        description: "Sho this message and exit",
      },
    ],
  },
};

const randomCommads: Record<string, Fig.Subcommand> = {
  console: {
    name: "console",
    description: "Get a console for an app or pod.",
    args: [
      {
        name: "OPTIONS",
        isOptional: true,
      },
      {
        name: "NAME",
        isOptional: false,
        description:
          "The name of the app or pod, e.g. `operator` or `ibm-cloud-frontend` or `m-0`",
      },
      {
        name: "COMMAND",
        isOptional: true,
        description: "The console command to run. Defaults to `/bin/bash`.",
      },
    ],
    options: [
      {
        name: ["-c", "--container"],
        isRequired: true,
        args: [
          {
            name: "CONTAINER",
            isOptional: false,
          },
        ],
      },
      {
        name: ["--interactive", "--no-interactive"],
      },
      {
        name: "--help",
        description: "Sho this message and exit",
      },
    ],
  },
  dl: {
    name: "dl",
    description:
      "Find a formation on dispatcher db across clusters. This only searches the production account and is used to validate the formation status. The CRN is unique for every formation and comes via a support ticket",
    options: [
      {
        name: "[REGION]",
        isRequired: false,
      },
      {
        name: "--help",
        description: "Sho this message and exit",
      },
    ],
    args: [
      {
        name: "CRN",
        description:
          "Provided by customer or formation's name, e.g. `crn:v1:bluemix:public:databases-for-etcd-preproduction:us-south:a/504b1bd609fad56077e567d1cddb4447:b6b48469-958a-4dd0-9d9e-bd3bb7002e78::`",
        isOptional: false,
      },
    ],
  },
  bp: {
    name: "bp",
    description:
      "Show information about pods being blocked by the vulnerability admission controller.",
    options: [
      {
        name: ["-n", "--namespace"],
        description:
          "Namespace in which to look for blocked pods. Defaults to all namespaces",
        args: {
          name: "NAMESPACE",
        },
      },
      {
        name: "--help",
        description: "Sho this message and exit",
      },
    ],
  },
};

const completionSpec: Fig.Spec = {
  name: "icdctl",
  description: "A CLI tool for operating IBM Cloud Databases",
  subcommands: [
    rabbitMQCommands.rqcs,
    rabbitMQCommands.rqfnl,
    rabbitMQCommands.rqsq,
    rabbitMQCommands.rquq,
    rabbitMQCommands.rqp,
    rabbitMQCommands.rqru,
    rabbitMQCommands.rqrr,
    rabbitMQCommands.rqui,

    mongodbCommands.moeui,
    mongodbCommands.moco,

    clusterCommands.cl,

    formationCommands.f,
    formationCommands.fs,

    recipesCommands.r,
    recipesCommands.rs,

    randomCommads.dl,
    randomCommads.bp,
    randomCommads.console,
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for icdctl",
    },
  ],
};

export default completionSpec;
