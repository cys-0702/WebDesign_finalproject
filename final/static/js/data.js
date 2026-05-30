const userDataStore = {
    STORAGE_KEY: "destinyUsers",

    getUsers() {
        const raw = localStorage.getItem(this.STORAGE_KEY);
        try {
            return raw ? JSON.parse(raw) : [];
        } catch (error) {
            console.warn("讀取註冊資料失敗：", error);
            return [];
        }
    },

    saveUser(user) {
        const users = this.getUsers();
        const normalizedEmail = user.email.trim().toLowerCase();

        if (users.some(u => u.email.toLowerCase() === normalizedEmail)) {
            return {
                success: false,
                error: "此電子郵件已經註冊過，請使用其他信箱。"
            };
        }

        users.push({
            name: user.name,
            email: normalizedEmail,
            password: user.password,
            registeredAt: new Date().toISOString(),
            balance: 100
        });

        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));

        return {
            success: true,
            users
        };
    },

    authenticate(email, password) {
        const normalizedEmail = email.trim().toLowerCase();
        const users = this.getUsers();
        const user = users.find(u => u.email.toLowerCase() === normalizedEmail);

        if (!user) {
            return {
                success: false,
                error: "找不到此電子郵件，請先註冊。"
            };
        }

        if (user.password !== password) {
            return {
                success: false,
                error: "密碼錯誤，請重新輸入。"
            };
        }

        if (typeof user.balance !== "number") {
            user.balance = 100;
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
        }

        return {
            success: true,
            user
        };
    }
};
