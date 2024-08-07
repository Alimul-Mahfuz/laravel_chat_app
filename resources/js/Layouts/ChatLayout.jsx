import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { usePage } from "@inertiajs/react";
const ChatLayout=({children})=>{
    const page= usePage()
    const conversation=page.props.conversations;
    const selectedConversation=page.props.selectedConversations;

    console.log("conversations",conversations)
    console.log("selectedConversations",selectedConversations)

    return <AuthenticatedLayout>
        ChatLayout 
        <div>{children}</div>
    </AuthenticatedLayout>
}
export default ChatLayout