import * as React from 'react';
import './App.css';
import { IAppProps } from './IAppProps';
import { IAppState } from './IAppState';
import axios from 'axios';
import Docs from '../docsComponent/Docs';
import Loader from '../loaderComponent/Loader';
import NotFound from '../notFoundComponent/NotFound';

export default class App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);

    this.state = {
      loading: true,
      notFound: false,
      docs: ''
    };
  }

  public componentDidMount(): void {
    const commandUrl = this.props.commandUrl;

    axios
      .get(commandUrl)
      .then(res => {
        this.setState({
          docs: res.data,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          notFound: true
        });
      });
  }

  public render(): React.ReactElement<IAppProps> {
    const { loading, notFound, docs } = this.state;

    return (
      <main className='docs'>
        {notFound ?
          <NotFound /> :
          loading ? <Loader /> : <Docs docsMarkDown={docs} />
        }
      </main>
    );
  }
}
