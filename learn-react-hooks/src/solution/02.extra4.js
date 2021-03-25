import useLocalStorageState from '../hooks/useLocalStorageState'

/* -------------------------------------------------------------------------- */

export default function GreetingEmail({ initialEmail = 'yamoo9@euid.dev' }) {
    // 커스텀 훅 useLocalStorageState() 훅 사용

    const [email, setEmail] = useLocalStorageState('email', initialEmail)
    const handleChange = (e) => setEmail(e.target.value)
    const handleFocus = (e) => e.target.select()

    return (
        <div>
            <form>
                <label htmlFor="email">이메일</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
            </form>
            <p>
                {email
                    ? `입력된 이메일: ${email}`
                    : '당신의 이메일을 입력해주세요.'}
            </p>
        </div>
    )
}
