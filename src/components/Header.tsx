import * as React from 'react';
interface IHeaderProps{
        collapsed:boolean;
}
interface IHeaderState{
    collapsed:boolean;
}
class Header extends React.Component<IHeaderProps,IHeaderState>{
    constructor (props:IHeaderProps){
        super(props);
    }

    public render(){
        return (<p>Hola mundo: {this.props.collapsed ? 'collapsed':'shown'}</p>)
    }
}

export default Header;