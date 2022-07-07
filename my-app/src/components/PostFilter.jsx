import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter( {...filter, query: e.target.value} ) }
                placeholder={"поиск"}
            />
            <MySelect
                value={filter.sort}
                onChange={ selectedSort => setFilter({...filter, sort : selectedSort})}
                defaultValue={"Сортировать по:"}
                options={[
                    {value: "title", name: "По заголовку"},
                    {value: "body", name: "По содержанию"}
                ]}
            />
        </div>
    );
};

export default PostFilter;
