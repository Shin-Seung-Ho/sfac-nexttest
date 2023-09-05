export default function Home() {
  return (
    <div className='flex flex-col bg-white'>
      <div className="bg-[#337AFF] h-[500px] text-white flex flex-col">
        <div className="ml-20 mt-[93px]">
          <p className="font-bold text-4xl">
            대기업도 선택한 플러터?
            <br />
            지금 시작하고 개발자 가보자고
          </p>
          <p className="font-sm text-2xl mt-4">
            파격 혜택받고
            <br />
            플러터 부트캠프 3기 참여하기</p>
        </div>
      </div>
      <div className="flex justify-between -translate-y-1/3 mx-auto gap-8">
        <div className="flex flex-col items-center w-72 h-72 bg-white/80 shadow-lg rounded-md backdrop-blur-lg ">
          <img src="/person.svg" alt="손 흔드는 사람" className="mt-4"/>
          <p className="underline mt-4">
            혜택 1.
          </p>
          <p className="font-bold">
            가장 먼저 수료생을
          </p>
          <p className="font-bold">
            만나보실 수 있습니다.
          </p>
        </div>
        <div className="flex flex-col items-center w-72 h-72 bg-white/80 shadow-lg rounded-md backdrop-blur-lg">
          <img src="/letter.svg" alt="편지" className="mt-4"/>
          <p className="underline mt-4">
            혜택 2.
          </p>
          <p className="font-bold">
            협력사 네트워킹 행사에
          </p>
          <p className="font-bold">
            초대장을 받을 수 있습니다.
          </p>
        </div>
        <div className="flex flex-col items-center w-72 h-72 bg-white/80 shadow-lg rounded-md backdrop-blur-lg">
          <img src="/code.svg" alt="코드" className="mt-4"/>
          <p className="underline mt-4">
            혜택 3.
          </p>
          <p className="font-bold">
            실제 모델을 교육생들과
          </p>
          <p className="font-bold">
          구현해볼 수 있습니다.
          </p>
        </div>
        <div className="flex flex-col items-center w-72 h-72 bg-white/80 shadow-lg rounded-md backdrop-blur-lg">
          <img src="/people.svg" alt="사람들" className="mt-4"/>
          <p className="underline mt-4">
            혜택 4.
          </p>
          <p className="font-bold">
            소속 개발자들은 수료생
          </p>
          <p className="font-bold">
            커뮤니티를 이용할 수 있습니다.
          </p>
        </div>
      </div>
      
    </div>
  )
}
