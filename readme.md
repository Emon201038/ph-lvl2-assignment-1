
# 1. What are some differences between interfaces and types in TypeScript?

When you're just getting into TypeScript, one of the most common questions you'll ask is:

 `“Should I use an interface or a type?”`

Both seem to do the same thing. Define the shape of data, but there are key differences that can help you decide when to use which. Let's break it down!

First, both interface and type can be used to define objects:


```javascript
interface User {
  name: string;
  age: number;
}

type User = {
  name: string;
  age: number;
};

```


In simple use cases, they're interchangeable. Both help you define structured data, enforce consistency, and benefit from TypeScript's type checking.

## 🔸 Key Differences
### 1. Extending and Inheritance
#### ✅ Interfaces:
Interfaces are built for extensibility. You can extend multiple interfaces easily:

```typescript
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}
```

#### ⚠️ Types:
Types can also be extended, but the syntax is a bit different:
```typescript
type Person = {
  name: string;
};

type Employee = Person & {
  employeeId: number;
};

```
`💡 Interfaces` are usually cleaner when you're dealing with inheritance or designing APIs.

### 2. Union and Intersection Types
#### ✅ Types:
You can create unions and intersections easily:
```typescript
type Status = "success" | "error" | "loading";
type ApiResponse = User | null;
```
#### ❌ Interfaces:
Interfaces do not support unions. They're made for defining object shapes only.
# 2. Provide an example of using union and intersection types in TypeScript.
🔀 `Union Types`
A union type allows a value to be one of several types.

✅ Example: `Union Type`
```typescript
type Status = "success" | "error" | "loading";

function showStatus(status: Status) {
  if (status === "success") {
    console.log("Everything is good! ✅");
  } else if (status === "error") {
    console.log("Something went wrong ❌");
  } else {
    console.log("Loading... ⏳");
  }
}

showStatus("success"); // ✅ Valid
showStatus("loading"); // ✅ Valid
// showStatus("done"); // ❌ Error: "done" is not assignable to type Status
```
🔗 `Intersection Types`
An intersection type combines multiple types into one, meaning the resulting type must satisfy all the combined types.

✅ Example: `Intersection Type`
```typescript
type User = {
  name: string;
  email: string;
};

type Admin = {
  isAdmin: boolean;
};

// AdminUser must satisfy both User AND Admin
type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Alice",
  email: "alice@example.com",
  isAdmin: true,
};

```