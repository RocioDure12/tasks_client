interface User{
    id: number;
    name: string;
    surname: string;
    email: string;
    username: string;
    password: string; 
    disabled: boolean;
    isVerified: boolean;
    verificationCode: string;
    deletedAt?: Date;
    createdAt: Date;
    updatedAt?: Date;
    roleId?: number;

}

export default User;