<h1 align="center">
  PnP PowerShell extension
</h1>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=adamwojcikit.pnp-powershell-extension&ssr=false#overview">
    <img src="https://vscode-marketplace-badge.vercel.app/api/badge/version/adamwojcikit.pnp-powershell-extension?color=%23276EC2&style=flat-square"
      alt="version" />
  </a>

  <a href="https://marketplace.visualstudio.com/items?itemName=adamwojcikit.pnp-powershell-extension&ssr=false#overview">
    <img src="https://vscode-marketplace-badge.vercel.app/api/badge/installs/adamwojcikit.pnp-powershell-extension?color=%234B51B8&style=flat-square"
      alt="installs" />
  </a>
</p>
This extension provides functionalities that may be helpful when creating scripts using PnP PowerShell. Currently, the extension provides:

- docs viewer inside VS Code
- samples gallery
- snippets with all possible commands

Please check [PnP PowerShell docs](https://pnp.github.io/powershell/) for more information.

## ✨ Features

### Script samples gallery

Using `PnP PS: Open samples gallery` command, or 'Samples' button from the controls above the command list, you may open the gallery with all available samples. Currently, the samples shown are retrieved from the [PnP script samples repository](https://github.com/pnp/script-samples). From the samples gallery you may go to the sample location or create a new tab (file) in the editor prefilled with the PnP PowerShell script. It is possible to search for samples by:

- title
- authors
- commands used in samples

![samples](/assets/images/samplesCommand.gif)

### Docs

This functionality provides PnP PowerShell docs view for all commands inside VS Code. No more transition between the code editor and browser is needed. It is possible to go to docs original website location and also open sample gallery showing all samples using that command.

![docs](/assets/images/howDocsWork.gif)

It is also possible to use the command `PnP PS: Open docs for command` to open the docs for a specific command. When that part of the script text is selected the command is prefilled with the PnP PowerShell command name.

![docs](/assets/images/docsCommand.gif)

### Command list tree view

![docs](/assets/images/treeViewIcon.png)

The command list also has the functionality to group commands view by command name verb

![docs](/assets/images/treeView.png)

### Snippets

The extensions help to quickly find the proper PnP PowerShell command and add it to the code using snippets. The command is added to the list of obligatory parameters. It is possible to quickly move between parameters using 'Tab' key. Each snippet has a description which may be found in the docs which is a great help to quickly understand the commands functionality.

![snippetsList](/assets/images/snippets.gif)

In order to use snippets please type part of a PnP PowerShell command and press enter or tab. The command will be automatically added to the code with the possibility to provide obligatory parameters. You may also use 'Ctrl + Space' (Windows, Linux) or 'Cmd + Space' (macOS) to activate snippets from within the editor.

![snippetsList](/assets/images/snippetsList.png)

It is also possible to use the command `Insert Snippet` in VS Code to see the full list

![snippetsList](/assets/images/listOfCommandsFromToolbar.png)

### Transition to PnP PowerShell Docs website

The extension provides many ways to get to the PnP PowerShell Docs web page or GitHub repository.

![docs](/assets/images/webPageButtons.png)

## 🤖 Commands

The extension provides the following commands:

| command   |      description      |
|----------|:-------------:|
| PnP PS: Open samples gallery | Opens up the sample gallery |
| PnP PS: Open docs for command | Search for a command doc file. The command may also be prefilled by the selected PnP PowerShell command   |

![commands](/assets/images/commands.png)

## 💬 Feedback

Any questions, problems, or feedback is more than welcome. Please create an issue in the extension repository [issue list](https://github.com/Adam-it/pnp-powershell-extension/issues).

## 🔑 License

[MIT License](https://github.com/Adam-it/pnp-powershell-extension/blob/main/LICENSE.md)
