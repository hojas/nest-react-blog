import { useLogin } from './useLogin'

export const LoginPage = () => {
  const { onSetEmail, onSetPassword, onLogin } = useLogin()

  return (
    <div className="card max-w-md w-1/2 mx-auto shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="text-3xl font-bold text-center">登录</div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">邮箱</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            onChange={onSetEmail}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">密码</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            onChange={onSetPassword}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={onLogin}>
            登录
          </button>
        </div>
      </div>
    </div>
  )
}
