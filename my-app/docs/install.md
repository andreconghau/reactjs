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



## tips

- khi call event onChange va onClick thì component sẽ thay đổi và việc thay đổi props sẽ làm các component con bên trong phải re-render lại => giải pháp là dùng hook `usecallback` https://reactjs.org/docs/hooks-reference.html#usecallback