import * as React from 'react';
import './Docs.css';
import { IDocsProps } from './IDocsProps';
import { IDocsState } from './IDocsState';
import ReactMarkdown from 'react-markdown';
import { vscode } from '../../utilities/vscode';
import { VSCodeButton } from '@vscode/webview-ui-toolkit/react';

export default class Docs extends React.Component<IDocsProps, IDocsState> {

  constructor(props: IDocsProps) {
    super(props);
  }

  public render(): React.ReactElement<IDocsProps> {
    let docs = this.props.docsMarkDown;
    const { docsCommandName, docsUrl } = this.props;
    docs = (docs as any).replaceAll('\n', ' \n');

    return (
      <div>
        <div className='docs-header'>
          <VSCodeButton appearance="primary" onClick={() => this._handleShowRelatedSamplesButtonClick(docsCommandName)}>
            Show related samples
            <span slot='start' className='codicon codicon-file-code'></span>
          </VSCodeButton>
          <VSCodeButton appearance="primary" onClick={() => this._handleOpenDocsWebPageButtonClick(docsUrl)}>
            Go to docs web page
            <span slot="start" className="codicon codicon-go-to-file"></span>
          </VSCodeButton>
        </div>
        <div className='docs-content'>
          <ReactMarkdown>{docs}</ReactMarkdown>
        </div>
      </div>
    );
  }

  private _handleShowRelatedSamplesButtonClick(name: string): void {
    vscode.postMessage({
      command: 'showSamples',
      value: name,
    });
  }

  private _handleOpenDocsWebPageButtonClick(url: string): void {
    vscode.postMessage({
      command: 'openLink',
      value: url,
    });
  }
}
