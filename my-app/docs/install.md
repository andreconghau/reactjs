# Usage atlast kit
https://atlassian.design/components/button/code


```bash
npm install @atlaskit/avatar @atlaskit/textfield @atlaskit/button @atlaskit/icon
```

# install styled-components
https://styled-components.com/docs/basics

npm install --save styled-components

ref:
https://github.com/andreconghau/reactjs/commit/ffdf73179b1d748b9406dba533f80b77045b69b3

# install uuid
```bash
npm install -s uuid
```


# state vaf props

## state
Lưu trữ cac giá trị nội tại trong components hiện tại

## props
Dữ liệu truyền từ ngoài vào, từ element cha


## React Hook useEffect
- nếu truyền một `[]` thì tương tự `componentDidMount`
```js
useEffect(() => {}, []);
```
- nhưng nếu truyền tham số vào thì nó sẽ thay đổi khi tham số đó thay đổi, `componentDidUpdate`
```js
useEffect(() => {
        
    }, [todoList]); 
```



## tips

- khi call event onChange va onClick thì component sẽ thay đổi và việc thay đổi props sẽ làm các component con bên trong phải re-render lại => giải pháp là dùng hook `usecallback` https://reactjs.org/docs/hooks-reference.html#usecallback
https://github.com/andreconghau/reactjs/commit/9f44f77c9a8534b91ced5408d1e0d83a23a43b28

