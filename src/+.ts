const completionSpec: Fig.Spec = {
  name: "+",
  description: "My shortcuts",
  subcommands: [
    {
      name: "IBM Cloud Login",
      icon: "💻",
      description: "Login intro IBM Cloud",
      insertValue:
        "\b\bibmcloud login --sso -a https://cloud.ibm.com -r us-east -c felipeg@ibm.com ;ibmcloud cr login ;docker login us.icr.io -u $DOCKER_USERNAME -p $DOCKER_TOKEN",
    },
  ],
};
export default completionSpec;
