import * as React from 'react';
import * as pnpPsCommands from '../../../../data/pnpPsModel.json';
import { ICommand } from '../../../../models/ICommand';
import { CONSTANTS } from '../../../../constants/Constants';
import './CommandsList.css';
import { ICommandsListProps } from './ICommandsListProps';
import { ICommandsListState } from './ICommandsListState';
import { vscode } from '../../utilities/vscode';
import { VSCodeButton, VSCodeDivider, VSCodeTextField } from '@vscode/webview-ui-toolkit/react';

export default class CommandsList extends React.Component<ICommandsListProps, ICommandsListState> {

  constructor(props: ICommandsListProps) {
    super(props);

    this.state = {
      commands: pnpPsCommands.commands as ICommand[]
    };
  }

  public render(): React.ReactElement<ICommandsListProps> {
    const { commands } = this.state;

    return (
      <div>
        <div className='pnp-commands-list-controls'>
          <div className='pnp-commands-list-actions'>
            <VSCodeButton appearance='icon' title='PnP PowerShell samples' onClick={() => this._handleShowSamplesButtonClick()}>
              <span className='codicon codicon-file-code'></span>
            </VSCodeButton>
            <VSCodeButton appearance='icon' title='PnP PowerShell web page' onClick={() => this._handleGoToHomePageButtonClick()}>
              <span className='codicon codicon-browser'></span>
            </VSCodeButton>
          </div>
          <VSCodeDivider />
          <VSCodeTextField placeholder='Search' size={50} onInput={e => this._handleSearch((e.target as HTMLInputElement)?.value)}>
            <span slot='start' className='codicon codicon-search'></span>
          </VSCodeTextField>
        </div>
        <div className='pnp-commands-list-wrapper'>
          <ul className='pnp-commands-list'>
            {commands.map(command => (<li key={commands.indexOf(command)} onClick={() => this._handleCommandClick(command.name)} className='cliCommand'>{command.name}</li>))}
          </ul>
        </div>
      </div>);
  }

  private _handleGoToHomePageButtonClick(): void {
    vscode.postMessage({
      command: 'openLink',
      value: CONSTANTS.repoHomePageLink
    });
  }

  private _handleShowSamplesButtonClick(): void {
    vscode.postMessage({
      command: 'showSamples'
    });
  }

  private _handleSearch(searchInput: string): void {
    const commands: ICommand[] = pnpPsCommands.commands as ICommand[];
    const searchResult: ICommand[] = commands.filter(command => command.name.toLowerCase().includes(searchInput.toLowerCase()));
    this.setState({ commands: searchResult });
  }

  private _handleCommandClick(commandName: string): void {
    vscode.postMessage({
      command: 'showCommandManual',
      value: commandName,
    });
  }
}