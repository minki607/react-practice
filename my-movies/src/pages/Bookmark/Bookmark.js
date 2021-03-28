import React from 'react'
import { bookmarkPage } from './Bookmark.module.scss'
import { Helmet } from 'react-helmet-async'
import { readAllBookmarkAction, useBookmark } from 'contexts'
import { serialize } from 'utils'
import { DisplayJsonCode, Bookmark } from 'components'
import { tmdb } from 'api'

/* -------------------------------------------------------------------------- */

export default function BookmarkPage(props) {
    // const { state, dispatch } = useBookmark()

    // React.useEffect(() => dispatch(readAllBookmarkAction()), [state])

    const state = [
        {
            id: '399566',
            title: '고질라 vs. 콩',
            tagline: '두 전설의 충돌, 사상 최강 빅매치!  승자는 정해진다!',
            overview:
                '콩과 보호자들은 정착할 수 있는 곳을 찾아 특별하고 강력한 유대감을 형성하고 있는 지아와 함께 여정을 떠나게 된다. 그러던 중 지구 파괴를 위한 회심의 날을 휘두르는 고질라와 마주하게 되고, 보이지 않는 힘에 의해 맞붙게 된 두 전설의 대결은 지구 깊은 곳에 도사린 수수께끼의 시작에 불과할 뿐이었는데…',
            poster: '/sqo672rKMXiLRC5kVcGvBRebkp.jpg',
            homepage: 'https://www.godzillavskong.com',
        },
        {
            id: '587807',
            title: '톰과 제리',
            tagline: '전 세계가 사랑한 라이벌 콤비 뉴욕을 발칵 뒤집는다!',
            overview:
                '생쥐 제리는 성대한 결혼식이 열리게 될 뉴욕의 한 고급 호텔로 이사를 오게 되고, 이벤트 플래너 카일라는 제리를 잡기 위해서 고양이 톰을 고용한다. 하지만 우당탕탕 사고뭉치들의 역대급 대소동은 카일라의 커리어는 물론 결혼식과 호텔까지도 위험에 빠뜨리게 되는데…',
            poster: '/rYoITBMgw14m4cucXNOAw3qBS6c.jpg',
            homepage: 'https://www.tomandjerrymovie.com',
        },
        {
            id: '495764',
            title: '버즈 오브 프레이: 할리 퀸의 황홀한 해방',
            tagline: '깨부수고 벗어 던져, 너답게',
            overview:
                '오랜 연인이던 조커와 헤어진 할리 퀸은 처음 맞이한 해방에 황홀함을 느낀다. 하지만 조커라는 방패막이 사라지자 평생 처음 무방비 상태에 놓인 할리 퀸을 고담시에서 가장 비열한 범죄왕 로만 시오니스와 고담의 모든 갱들이 노린다. 통제 불능의 상태에서 카산드라라는 소매치기가 로만의 부하에게서 모든 권력과 고담시 지하 세계 전체의 지배권을 차지할 열쇠인 금융 정보가 암호화되어 있는 다이아몬드를 훔치면서 사건을 걷잡을 수 없이 급변한다. 로만 손에 죽을 위기에 처한 할리 퀸은 헌트리스, 블랙 카나리, 르네 몬토야와 새로운 팀을 결성해 로만에 맞서는데...',
            poster: '/1HjYMW5Je0D8JkRl5DEXJSdVtDK.jpg',
            homepage: 'http://www.birdsofpreymovie.net',
        },
        {
            id: '577922',
            title: '테넷',
            tagline: '시간을 추격하라',
            overview:
                '주도자는 미국의 한 요원으로 우크라이나 국립 오페라 극장의 한 사건에 투입되었다가 우크라이나 요원들에게 붙잡히게 되고 고문을 받지만 CIA가 준 자살 약을 먹고 자살을 택하게 된다. 그러나 이내 다시 눈을 뜬 주인공은 의문의 한 남자로부터 임무를 부여받는다. 그가 주도자에게 줄 수 있는 건 하나의 제스처와 하나의 단어 뿐. 시간의 흐름을 뒤집는 인버전을 통해 현재와 미래를 오가며 세상을 파괴하려는 사토르를 막기 위해 투입된 작전의 주도자는 인버전에 대한 정보를 가진 닐과 미술품 감정사이자 사토르에 대한 복수심이 가득한 그의 아내 캣과 협력해 미래의 공격에 맞서 제3차 세계대전을 막아야 한다.',
            poster: '/4ISu3R5OQQ39aWCzWWYrB9reSQD.jpg',
            homepage: 'https://www.tenetfilm.com/',
        },
    ]

    return (
        <div className={bookmarkPage}>
            <Helmet>
                <title>
                    북마크 페이지 (인증 사용자 전용) ← "나의 영화" 서비스
                </title>
            </Helmet>

            <Bookmark.List>
                {state.map(
                    ({ id, poster, title, tagline, overview, homepage }) => {
                        return (
                            <Bookmark key={id}>
                                <Bookmark.HomepageLink href={homepage} external>
                                    <Bookmark.Poster
                                        src={tmdb.getImageURL(poster)}
                                        alt=""
                                    />
                                </Bookmark.HomepageLink>
                                <Bookmark.Container column>
                                    <Bookmark.Title>{title}</Bookmark.Title>
                                    <Bookmark.Tagline>
                                        {tagline}
                                    </Bookmark.Tagline>
                                    <Bookmark.Button
                                        isActive={true}
                                        iconProps={{ size: '2x' }}
                                    />
                                    <Bookmark.Overview>
                                        {overview}
                                    </Bookmark.Overview>
                                </Bookmark.Container>
                            </Bookmark>
                        )
                    }
                )}
            </Bookmark.List>
        </div>
    )
}
