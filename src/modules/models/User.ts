interface User{
    id: number;
    name: string;
    surname: string;
    email: string;
    username: string;
    password: string; 
    disabled: boolean;
    is_verified: boolean;
    //verificationCode: string;
    deleted_at?: Date;
    created_at: Date;
    updated_at?: Date;
    role_id?: number;

}

export default User;