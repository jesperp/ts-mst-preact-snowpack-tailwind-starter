import { types, Instance } from "mobx-state-tree"

const Foo = types.model({
    name: "",
})

export interface IFoo extends Instance<typeof Foo> {}

export default Foo.create({
    name: "My Foo"
})

