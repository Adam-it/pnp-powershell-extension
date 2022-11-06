import * as React from 'react';
import * as pnpPsCommands from '../../../../data/pnpPsModel.json';
import { ICommand } from '../../../../models/ICommand';
import './CommandsList.css';
import { ICommandsListProps } from './ICommandsListProps';
import { ICommandsListState } from './ICommandsListState';
import { vscode } from '../../utilities/vscode';
import { VSCodeDivider } from '@vscode/webview-ui-toolkit/react';
import CommandsSearch from '../commandsSearchComponent/CommandsSearch';
import CommandsAction from '../commandsActionComponent/CommandsAction';
import { ICommandGroup } from './model/ICommandGroup';


export default class CommandsList extends React.Component<ICommandsListProps, ICommandsListState> {

  constructor(props: ICommandsListProps) {
    super(props);

    const commands = pnpPsCommands.commands as ICommand[];

    this.state = {
      commandsListView: commands,
      commandsTreeView: this._getTreeView(commands),
      isTreeViewEnabled: false
    };
  }

  public render(): React.ReactElement<ICommandsListProps> {
    const { commandsListView,
      isTreeViewEnabled,
      commandsTreeView } = this.state;

    return (
      <div>
        <div className='pnp-commands-list-controls'>
          <CommandsAction isTreeViewEnabled={isTreeViewEnabled} showListView={() => this._handleShowListViewButtonClick()} showTreeView={() => this._handleShowTreeViewButtonClick()} />
          <VSCodeDivider />
          <CommandsSearch onSearch={event => this._handleSearch(event)} />
        </div>
        <div className='pnp-commands-list-wrapper'>
          {isTreeViewEnabled ?
            <div className='pnp-commands-tree'>
              {commandsTreeView.map((group: ICommandGroup) => {
                return (
                  <div key={group.name}>
                    <div className='pnp-commands-tree-group'>
                      <span className='codicon codicon-chevron-right'></span>
                      <span className='pnp-commands-tree-group-name'>{group.name}</span>
                    </div>
                    <div className='pnp-commands-tree-commands'>
                      <ul>
                        {group.commands.map(command => (<li key={commandsListView.indexOf(command)} onClick={() => this._handleCommandClick(command.name)}>{command.name}</li>))}
                      </ul>
                    </div>
                  </div>
                );
              })
              }
            </div> :
            <div className='pnp-commands-list'>
              <ul>
                {commandsListView.map(command => (<li key={commandsListView.indexOf(command)} onClick={() => this._handleCommandClick(command.name)}>{command.name}</li>))}
              </ul>
            </div>
          }
        </div>
      </div>);
  }

  private _handleShowListViewButtonClick(): void {
    this.setState({ isTreeViewEnabled: false });
  }

  private _handleShowTreeViewButtonClick(): void {
    this.setState({ isTreeViewEnabled: true });
  }

  private _handleSearch(event: any): void {
    const searchInput: string = (event.target as HTMLInputElement)?.value;
    const commands: ICommand[] = pnpPsCommands.commands as ICommand[];
    const searchResult: ICommand[] = commands.filter(command => command.name.toLowerCase().includes(searchInput.toLowerCase()));
    this.setState({
      commandsListView: searchResult,
      commandsTreeView: this._getTreeView(searchResult)
    });
  }

  private _handleCommandClick(commandName: string): void {
    vscode.postMessage({
      command: 'showCommandManual',
      value: commandName,
    });
  }

  private _getTreeView(commands: ICommand[]): ICommandGroup[] {
    const groups = commands.map(command => command.name.split('-')[0]).filter((value, index, self) => self.indexOf(value) === index);
    const treeView = groups.map(group => {
      return {
        name: group,
        isExpanded: false,
        commands: commands.filter(command => command.name.startsWith(group))
      } as ICommandGroup;
    });

    return treeView;
  }
}