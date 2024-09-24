export default function ChatRoom() {
  return (
    <div className="min-h-screen bg-[#0F212E] flex flex-col items-start"> 
      <main className="container mx-auto px-4 py-8 flex-1 flex"> {/* Aggiunto flex per allineare gli iframe */}
        <div className="flex-1"> {/* Aggiunto per occupare spazio disponibile */}
          <iframe 
            src="https://kick.com/hypegamble/chatroom" 
            className="w-full h-[90vh] border-none rounded-lg rounded-[15px]" 
            title="Hype Gamble Chat Room"
          />
        </div>
        <iframe 
          src="https://kick.com/dashboard/popout/stream-session-info?channel=HypeGamble" 
          className="w-[36%] h-[15vh] border-none rounded-lg rounded-[12px] ml-4" // Aggiunto margine a sinistra per spazio
          title="Hype Gamble Stream Session Info"
        />
      </main>
    </div>
  )
}
