import * as React from 'react';
import * as samples from '../../../../data/samples.json';
import { ISample } from '../../../../models/ISample';
import './App.css';
import { IAppProps } from './IAppProps';
import { IAppState } from './IAppState';
import Loader from '../loaderComponent/Loader';
import Card from '../cardComponent/Card';
import { VSCodeDivider, VSCodeTextField } from '@vscode/webview-ui-toolkit/react';

export default class App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);

    this.state = {
      loading: true,
      samples: null
    };
  }

  public componentDidMount(): void {
    this.setState({
      samples: samples.samples as ISample[],
      loading: false
    });
  }

  public render(): React.ReactElement<IAppProps> {
    const { loading, samples } = this.state;

    return (
      <main>
        <div className='app-title'>
          <h2>PnP PowerShell samples</h2>
        </div>
        <div className='app-search'>
          <VSCodeTextField placeholder="Search for sample" size={50} onInput={e => this._handleSearch((e.target as HTMLInputElement)?.value)}>
            <span slot="start" className="codicon codicon-search"></span>
          </VSCodeTextField>
          <VSCodeDivider />
        </div>
        <div className='app-samples'>
          {loading ?
            <Loader /> :
            samples?.map((sample: ISample, index: number) => <Card key={index} sample={sample} />)}
        </div>
      </main>
    );
  }

  private _handleSearch(searchInput: string): void {
    const allSamples: ISample[] = samples.samples as ISample[];
    const searchResult: ISample[] = allSamples.filter(sample => sample.title.toLowerCase().includes(searchInput.toLowerCase()));
    this.setState({ samples: searchResult });
  }
}
