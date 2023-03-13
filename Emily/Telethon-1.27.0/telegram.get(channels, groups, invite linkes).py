import asyncio
from telethon import TelegramClient
from telethon.tl.functions.messages import ExportChatInviteRequest
from telethon.errors.rpcerrorlist import ChatAdminRequiredError

async def main():
    # Create a client object and connect to Telegram's API
    client = TelegramClient('name', 20845158, 'c8c0abf13a8f25ba67e1edc286a5fc39')
    await client.start()

    # Iterate over all the dialogs and print the channels and groups invite links
    async for dialog in client.iter_dialogs():
        if dialog.is_channel or dialog.is_group:
            # Get the InputPeer object for the chat by its id
            input_peer = await client.get_input_entity(dialog.id)

            # Try to get the invite link for the chat using the ExportChatInviteRequest method
            try:
                result = await client(ExportChatInviteRequest(input_peer))
                invite_link = result.link

                # Print the chat id, title, and invite link
                print(dialog.id, dialog.title, invite_link)
            except ChatAdminRequiredError:
                # Skip the chat if you are not an admin or have insufficient permissions
                print(f"Skipping {dialog.title} because you are not an admin or have insufficient permissions.")

    # Disconnect from the client
    await client.disconnect()

# Run the main function inside an event loop
loop = asyncio.get_event_loop()
loop.run_until_complete(main())

# ==> telethon.errors.rpcerrorlist.PeerIdInvalidError: An invalid Peer was used. Make sure to pass the right peer type and that the value is valid (for instance, bots cannot start conversations) (caused by ExportChatInviteRequest)