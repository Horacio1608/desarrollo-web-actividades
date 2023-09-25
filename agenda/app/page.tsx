import { FormRegister} from '@/app/components/form-register';
import { TableList} from '@/app/components/table-list';

export default function Home() {
  return (
    <main className="p-24">

      <div className="grid grid-cols-2 gap-4">
        <div>
          <FormRegister/>
        </div>
        <div>
          <TableList/>
        </div>
      </div>
    </main>
  )
}
