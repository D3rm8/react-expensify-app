import { login, logout } from "../../actions/auth";

test("should generate login action obeject", () => {
	const uid = "uid123";
	const action = login(uid);
	expect(action).toEqual({
		type: "LOGIN",
		uid,
	});
});

test("should generate logout action obeject", () => {
	const action = logout();
	expect(action).toEqual({
		type: "LOGOUT",
	});
});
