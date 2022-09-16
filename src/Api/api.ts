import axios from "axios"

interface dataInterface {
    userPhoneNumber: number | string;
    userName: string;
    lastName: string;
    email: string;
    workplace: string;
    lang: string;
    profession: string;
    age: string;
    birth: string;
    idRole: string;
}

export const registerUser = (data: dataInterface) => {
    return axios.post(`https://botpashatesting.inboost.ai/api/MyClients/AddNewClient`,{
        "userPhoneNumber": data.userPhoneNumber,
        "userName": data.userName,
        "lastName": data.lastName,
        "email": data.email,
        "workplace": data.workplace,
        "lang": data.lang,
        "profession": data.profession,
        "age": data.age,
        "birth": data.birth,
        "idRole": data.idRole,
    }, {
        headers: {
            "Authorize": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxMDA0NDkwIiwiUm9sZUlkIjoiNCIsIlBvcnRhbElkIjoiMTAyNDI0Iiwicm9sZSI6IlBvcnRhbEFkbWluIiwibmJmIjoxNjYyMDExNzcwLCJleHAiOjE2Nzc2NTAxNzAsImlhdCI6MTY2MjAxMTc3MH0.xRegVe8mVkCf8JzD5xp6g7DDHDqtwX5tK550CZTFuhk",
        },
    })
};
