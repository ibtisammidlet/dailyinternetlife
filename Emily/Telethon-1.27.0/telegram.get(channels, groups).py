import asyncio
from telethon import TelegramClient



async def main():
    # Create a client object and connect to Telegram's API
    client = TelegramClient('name', 20845158, 'c8c0abf13a8f25ba67e1edc286a5fc39')
    await client.start()

    # Iterate over all the dialogs and print the channels
    async for dialog in client.iter_dialogs():
        if dialog.is_channel and not dialog.is_group:
            print(dialog.id, dialog.title)

    # Disconnect from the client
    await client.disconnect()

# Run the main function inside an event loop
loop = asyncio.get_event_loop()
loop.run_until_complete(main())
