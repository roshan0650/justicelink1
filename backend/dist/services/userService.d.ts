interface StoredUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    userType: 'user' | 'lawyer';
    createdAt: Date;
}
export declare const userService: {
    create: (userData: {
        name: string;
        email: string;
        password: string;
        userType: "user" | "lawyer";
    }) => Promise<StoredUser>;
    findByEmail: (email: string) => Promise<StoredUser | null>;
    findById: (id: string) => Promise<StoredUser | null>;
    comparePassword: (plainPassword: string, hashedPassword: string) => Promise<boolean>;
    getAll: () => Promise<StoredUser[]>;
    clear: () => Promise<void>;
};
export {};
//# sourceMappingURL=userService.d.ts.map