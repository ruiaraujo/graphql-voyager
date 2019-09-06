import * as React from 'react';
interface SearchResultsProps {
    typeGraph: any;
    withinType: any;
    searchValue: string;
    onTypeLink: (type: any) => void;
    onFieldLink: (field: any, type: any) => void;
}
export default class OtherSearchResults extends React.Component<SearchResultsProps> {
    render(): JSX.Element;
}
export {};
