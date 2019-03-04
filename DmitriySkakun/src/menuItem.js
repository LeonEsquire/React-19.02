import React from 'react';
import PropTypes from 'prop-types';

class MenuItem extends React.Component{// создаем компонент используя механизм Реакт Компонент
    render(){//прописываем метод рендер - отрисовки
        // let title;
        // if (this.props.children){
        //     title = this.props.children;
        // } else {
        //     title = 'Пустота'
        // }
        return(//возвращаем
            <li><a href={this.props.href}>{this.props.children}</a></li>//элемент li в котором вместо ссылки и названия значения взятые из props которые переданы из App
        );
    }
}

MenuItem.defaultProps = {//значения props по умолчанию
    children: 'Главная страница',
    href: '/'
}
MenuItem.propTypes = {//проверка типов значений props
    children:  PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

export default MenuItem;//экспортируем по умолчанию