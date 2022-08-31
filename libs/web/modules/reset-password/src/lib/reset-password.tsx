import { useResetPassword } from './useResetPassword'

export const ResetPasswordPage = () => {
  const {
    onSetOldPassword,
    onSetNewPassword,
    onSetComparePassword,
    onResetPassword,
  } = useResetPassword()

  return (
    <div className="card max-w-md w-1/2 mx-auto shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="text-3xl font-bold text-center">设置新密码</div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">原密码</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            onChange={onSetOldPassword}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">新密码</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            onChange={onSetNewPassword}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">确认新密码</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            onChange={onSetComparePassword}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={onResetPassword}>
            确认
          </button>
        </div>
      </div>
    </div>
  )
}
