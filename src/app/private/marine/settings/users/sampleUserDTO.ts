export interface IUserDTO {
    email: string,
    firstName: string,
    lastName: string,
    institution: string,
    status: "Active" | "InActive",
}

export const users: IUserDTO[] = [
    {
        email: "john.doe@example.com",
        firstName: "John",
        lastName: "Doe",
        institution: "Insurance Institution",
        status: "Active",
    },
    {
        email: "jane.smith@example.com",
        firstName: "Jane",
        lastName: "Smith",
        institution: "Insurance Institution",
        status: "Active",
    },
    {
        email: "bob.jones@example.com",
        firstName: "Bob",
        lastName: "Jones",
        institution: "Insurance Institution",
        status: "InActive",
    },
    {
        email: "alice.rogers@example.com",
        firstName: "Alice",
        lastName: "Rogers",
        institution: "Insurance Institution",
        status: "Active",
    },
    {
        email: "sam.wilson@example.com",
        firstName: "Sam",
        lastName: "Wilson",
        institution: "Insurance Institution",
        status: "InActive",
    },
];
