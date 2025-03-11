const content = document.getElementById('content_my_work');
const diagram = document.getElementById('default-carousel_Diagram');
const posDemo = document.getElementById('default-carousel_POS');
const crmDemo = document.getElementById('default-carousel_CRM');
const Show_ALL_Demo = document.getElementById('default-carousel_Show');

document.getElementById('POS_project_DOC').addEventListener('click', () => {
    // ซ่อนทุกส่วน
    diagram.classList.add('hidden');
    posDemo.classList.add('hidden');
    crmDemo.classList.add('hidden');
    Show_ALL_Demo.classList.add('hidden');
    content.innerHTML = "";

    // สร้างเนื้อหาใหม่
    const div = document.createElement('div');
    div.className = "relative rounded-lg h-full text-justify";
    div.innerHTML = `
        <span>
            <p class="inline-flex mt-4 ml-12">เป็นโปรแกรม</p> เพื่อแก้ปัญหา
            ระบบบริหารจัดการร้านของร้านค้าที่ไม่มีประสิทธิภาพ โดยเราได้ออกแบบระบบเป็น 2 ส่วนหลัก ๆ คือ ส่วนระบบ Admin และระบบ Membership 
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <ul class="block ml-12 col-span-1"><br>ส่วน Admin มีขอบเขตการทำงาน 
                    <ul class="ml-6">Admin คือ เจ้าของร้าน
                        <li class="ml-6">สามารถขายสินค้า</li>
                        <li class="ml-6">สามารถจัดการสต็อกสินค้า</li>
                        <li class="ml-6">สามารถเข้าสู่ระบบและลงทะเบียน</li>
                        <li class="ml-6">สามารถจัดการรายงาน</li>
                        <li class="ml-6">สามารถจัดการสมาชิก</li>
                        <li class="ml-6">สามารถจัดการข้อมูลส่วนตัว</li>
                        <li class="ml-6">สามารถจัดการสินค้า</li>
                    </ul> 
                    <ul class="ml-6">Admin คือ พนักงานร้านค้า
                        <li class="ml-6">สามารถขายสินค้า</li>
                        <li class="ml-6">สามารถจัดการสต็อกสินค้า</li>
                        <li class="ml-6">สามารถเข้าสู่ระบบและลงทะเบียน</li>
                        <li class="ml-6">สามารถจัดการข้อมูลส่วนตัว</li>
                    </ul> 
                </ul>
                <ul class="block ml-12 col-span-1"><br>ส่วน Membership มีขอบเขตการทำงาน 
                    <li class="ml-6">สามารถดูคะแนนสะสมผ่าน <br>LINE Official Account (LineOA)</li>
                    <li class="ml-6">สามารถดูประวัติการสั่งซื้อผ่าน <br> LINE Official Account (LineOA)</li>
                    <li class="ml-6">สามารถจัดการข้อมูลสมาชิกผ่าน <br> LINE Official Account (LineOA)</li>
                    <li class="ml-6">สามารถแลกสินค้าผ่าน <br> LINE Official Account (LineOA)</li>
                </ul>
            </div>    
            <p><br>โปรแกรมที่ใข้พัฒนา</p>
                Visual Studio Code, 
                ChatGPT, 
                LINE Developers, 
                Electron JS, 
                Tailwind CSS, 
                LINE Official Account Manager
        </span>        
    `;
    content.appendChild(div);
});

document.getElementById('POS_diagaram').addEventListener('click', () => {
    // ซ่อนทุกส่วน
    diagram.classList.remove('hidden');
    posDemo.classList.add('hidden');
    crmDemo.classList.add('hidden');
    Show_ALL_Demo.classList.add('hidden');
    content.innerHTML = '';
});

document.getElementById('POS_demo').addEventListener('click', () => {
    // ซ่อนทุกส่วน
    diagram.classList.add('hidden');
    crmDemo.classList.add('hidden');
    Show_ALL_Demo.classList.add('hidden');
    posDemo.classList.remove('hidden');
    content.innerHTML = '';
});

document.getElementById('CRM_demo').addEventListener('click', () => {
    // ซ่อนทุกส่วน
    diagram.classList.add('hidden');
    posDemo.classList.add('hidden');
    crmDemo.classList.remove('hidden');
    content.innerHTML = '';
});

document.getElementById('present-Portfotio').addEventListener('click', () => {
    // ซ่อนทุกส่วน
    diagram.classList.add('hidden');
    posDemo.classList.add('hidden');
    crmDemo.classList.add('hidden');
    Show_ALL_Demo.classList.add('hidden');
    content.innerHTML = "";

    // สร้างเนื้อหาใหม่
    const div = document.createElement('div');
    div.className = "relative rounded-lg h-full text-justify";
    div.innerHTML = `
    <span>
        <p class="inline-flex mt-4 ml-12">หลักการออกแบบ Portfolio</p> คือ 
        ต้องการให้ดูเรียบง่าย สบายตา สามารถใช้ได้กับทุกขนาดหน้าจอ โดยส่วน Light mode จะเน้นสีโทนสีขาว และเสริมลูกเล่นด้วย สีเขียว (#2dd4c5)
        และส่วน Dark mode จะเน้นสีโทนสีดำ และเสริมลูกเล่นด้วย สีม่วง (#f4a8ff) แล้ว rum server ด้วย vercel
    </span>        
`;
    content.appendChild(div);
})

document.getElementById('certificate-IP').addEventListener('click', () => {
    // ซ่อนทุกส่วน
    diagram.classList.add('hidden');
    posDemo.classList.add('hidden');
    crmDemo.classList.add('hidden');
    Show_ALL_Demo.classList.add('hidden');
    content.innerHTML = "";

    // สร้างเนื้อหาใหม่
    const div = document.createElement('div');
    div.className = "relative rounded-lg h-full";
    div.innerHTML = `
        <div class="duration-700 ease-in-out">
            <img src="./image/itpe.png"
                class="block  w-full h-full "
                alt="...">
        </div>     
    `;
    content.appendChild(div);
})

