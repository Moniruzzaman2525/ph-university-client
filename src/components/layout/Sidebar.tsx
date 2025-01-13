import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const {  Sider } = Layout;

const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student',
}


export const Sidebar = () => {

    const role = 'faculty'

    let sidebarItem;

    switch (role) {
        case userRole.ADMIN:
            sidebarItem = sidebarItemsGenerator(adminPaths, userRole.ADMIN)
            break;
        case userRole.FACULTY:
            sidebarItem = sidebarItemsGenerator(facultyPaths, userRole.FACULTY)
            break;
        case userRole.STUDENT:
            sidebarItem = sidebarItemsGenerator(studentPaths, userRole.STUDENT)
            break;
    
        default:
            break;
    }

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
        >
            <div style={{ color: 'white', height: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Ph Uni</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItem} />
        </Sider>
    )
}
