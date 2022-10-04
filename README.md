# PnP PowerShell extension

This extension provides functionalities that may be helpful when creating scripts using PnP PowerShell. Currently the extension provides:

- docs viewer inside vscode
- samples gallery
- snippets with all possible commands

Please check [PnP PowerShell docs](https://pnp.github.io/powershell/) for more information.

## ✨ Features

### Script samples gallery

Using `PnP PS: Open samples gallery` command, or 'Samples' button, you may open the gallery with all available samples. Currently the samples shown are retrieved from the [PnP script samples repository](https://github.com/pnp/script-samples). From the samples gallery you may go to the sample location or create a new tab in editor prefilled with the PnP PowerShell script.  It is possible to search for sample by:

- title
- authors
- commands used in samples

![samples](/assets/images/samplesCommand.gif)

### Docs

This functionality provides PnP PowerShell docs view for all commands inside vscode. No more transition between the code editor and browser is needed. It is possible to go to docs original web site location and also open sample gallery showing all samples using the command.

![docs](/assets/images/howDocsWork.gif)

It is also possible to use the command `PnP PS: Open docs for command` to open the docs for a specific command.

![docs](/assets/images/docsCommand.gif)

### Snippets

The extensions helps to quickly find the proper PnP PowerShell command and add it into the code using snippets. The command is added with the list of obligatory parameters. It is possible to quickly move between parameters using 'Tab' key. Each snippet has description which may be found in the docs which is a great help to quickly understand the commands functionality.

![snippetsList](/assets/images/snippets.gif)

In order to use snippets please type part of a snippet and press enter or tab. The command will be automatically with possibility to provide obligatory parameters. You may also use 'Ctrl + Space' (Windows, Linux) or 'Cmd + Space' (macOS) to activate snippets from within the editor.

![snippetsList](/assets/images/snippetsList.png)

It is also possible to use command `Insert Snippet` in VS Code to see the full list

![snippetsList](/assets/images/listOfCommandsFromToolbar.png)

## 🤖 Commands

The extension provides the following commands:

| command   |      description      |
|----------|:-------------:|
| PnP PS: Open samples gallery | Opens up the sample gallery |
| PnP PS: Open docs for command | Search for command doc file. The command may also be prefilled by the selected PnP PowerShell command   |

![commands](/assets/images/commands.png)

## 💬 Feedback

Any questions, problems, feedback is more than welcome. Please create an issue in the extension repository [issue list](https://github.com/Adam-it/pnp-powershell-extension/issues).
Any ideas or want to see what is on the list of features to show up? Please check the [discussions](https://github.com/Adam-it/pnp-powershell-extension/discussions)

## 🔑 License

[MIT License](https://github.com/Adam-it/pnp-powershell-extension/blob/main/LICENSE.md)
