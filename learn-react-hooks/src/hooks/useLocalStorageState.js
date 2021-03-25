import { useState, useEffect, useRef } from 'react'
// 로컬 스토리지 별칭 등록
const { localStorage: storage, JSON } = window

export const serialize = JSON.stringify
export const deserialize = JSON.parse
/* -------------------------------------------------------------------------- */

// 커스텀 훅 useLocalStorageState() 훅 정의
export default function useLocalStorageState(key, initialValue = '') {
    // 지연된 초기화
    const prevKeyRef = useRef()

    const [state, setState] = useState(() => {
        const dataInStorage = storage.getItem(key)
        if (dataInStorage) {
            //데이터 읽기에 성공
            // JSON 객체의 메서드에 의해 parse가 필요한 상태
            return deserialize(dataInStorage)
        } else {
            // 데이터 읽기에 실패, 만약 initialValue 의 데이터 유형이 함수라면

            return typeof ininitalValue === 'function'
                ? initialValue()
                : initialValue
        }
    })

    useEffect(() => {
        // 이전 키 값과 현재 키값
        // 값이 다르면
        // 로컬 스토리지에서 이전 키값 제거
        // 현재 키 값을 이전 키 값을 참조하는  prevKeyRef 의 current 값으로 업뎃

        if (key !== prevKeyRef.current) {
            storage.removeItem(prevKeyRef.current)
        }

        prevKeyRef.current = key
        // 로컬 스토리지 key값에 데이터 쓰기
        // 데이터가 js 어떤 ㄷㅔ이터 유형도 저장하러 할 경우
        // JSON.stringify()활용
        storage.setItem(key, serialize(state))
    }, [key, state])

    return [state, setState]
}
