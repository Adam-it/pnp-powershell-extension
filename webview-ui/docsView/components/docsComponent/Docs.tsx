import * as React from 'react';
import './Docs.css';
import { IDocsProps } from './IDocsProps';
import { IDocsState } from './IDocsState';
import ReactMarkdown from 'react-markdown';

export default class Docs extends React.Component<IDocsProps, IDocsState> {

  constructor(props: IDocsProps) {
    super(props);
  }

  public render(): React.ReactElement<IDocsProps> {
    let docs = this.props.docsMarkDown;
    docs = (docs as any).replaceAll('\n', ' \n');

    return (
      <ReactMarkdown>{docs}</ReactMarkdown>
    );
  }
}
