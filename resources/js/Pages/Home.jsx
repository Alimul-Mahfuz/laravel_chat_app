import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ChatLayout from "@/Layouts/ChatLayout.jsx";

export default function Dashboard({ auth }) {
    return (
        <ChatLayout>
            <div className="py-12">
                Messages
            </div>
        </ChatLayout>
    );
}
