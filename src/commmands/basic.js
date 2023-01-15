let basic = (context) => {
  return {
    help: () => {
      context.echo("\n The list of basic commands are : ");
      context.echo("================= \n");
      context.echo(
        "> echo - outputs the strings that are passed to it as arguments "
      );
      context.echo(
        "> pwd - writes to standard output the full path name of your current directory (from the root directory"
      );
      context.echo("> ls - used to list files");
      context.echo("> cd - allows you to move between directories");
      context.echo("> mkdir - allows the user to create directories  ");
      context.echo(
        "> clear - used to bring the command line on top of the computer terminal"
      );
      context.echo(
        "> uname - writes to standard output the name of the operating system that you are using"
      );
      context.echo("> ifconfig - get the IP address");
      context.echo("> date - display the system date and time");

      context.echo("\n");
    },
    echo: (text) => {
      console.log(context);
      context.echo(text);
    },
    uname: () => {
      console.log(navigator.userAgent);
      var OSName = "Unknown OS";
      if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
      if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
      if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
      if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

      context.echo("Your OS: " + OSName);
    },
    ifconfig: () => {
      fetch("https://api.ipify.org/")
        .then((r) => r.text())
        .then(context.echo);
    },
    date: () => {
      const d = new Date();
      context.echo(d);
    },
  };
};

export { basic };
