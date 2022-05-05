const completionSpec: Fig.Spec = {
  name: "ibmcloud",
  description: "A command line tool to interact with IBM Cloud",
  subcommands: [
    {
      name: "login",
      description: "Log user in",
      options: [
        {
          name: "--sso",
          description: "Single Sing On",
        },
        {
          name: "-a",
          args: {
            name: "URL",
            default: "https://cloud.ibm.com",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for ibmcloud",
    },
    {
      name: [" --version", "-v"],
      description: "Print the version",
    },
  ],
};

export default completionSpec;
