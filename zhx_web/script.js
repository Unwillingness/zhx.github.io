// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取表单元素
    const form = document.getElementById('info-form');
    const nameInput = document.getElementById('name');
    const genderSelect = document.getElementById('gender');
    const addressInput = document.getElementById('address');
    const submitBtn = document.getElementById('submit-btn');
    const infoResult = document.getElementById('info-result');
    
    // 添加提交按钮的点击事件监听器
    submitBtn.addEventListener('click', function() {
        // 获取表单值
        const name = nameInput.value.trim();
        const gender = genderSelect.value;
        const address = addressInput.value.trim();
        
        // 验证表单数据
        if (!name) {
            alert('请输入姓名');
            return;
        }
        
        if (!gender) {
            alert('请选择性别');
            return;
        }
        
        if (!address) {
            alert('请输入地址');
            return;
        }
        
        // 转换性别为中文
        let genderText = '';
        if (gender === 'male') {
            genderText = '男';
        } else if (gender === 'female') {
            genderText = '女';
        }
        
        // 显示提交的信息
        infoResult.innerHTML = `
            <p><strong>姓名：</strong>${name}</p>
            <p><strong>性别：</strong>${genderText}</p>
            <p><strong>地址：</strong>${address}</p>
        `;
        
        // 显示成功提示
        alert('信息提交成功！');
    });
});