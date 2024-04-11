interface MessageCountProps{
    messageCount:number

}

const MessageCount: React.FC<MessageCountProps> = ({messageCount})=>{
    return(
        messageCount > 0 && <p>New messages {messageCount}</p>
    
    )    

}

export default MessageCount;