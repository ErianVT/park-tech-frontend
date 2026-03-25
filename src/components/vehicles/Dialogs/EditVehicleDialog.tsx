import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { editVehicleSchema, type EditVehicleSchema } from "@/schemas/vehicles/editVehicleSchema"
import { editVehicle } from "@/services/vehicles/vehicles.service"
import type { Vehicle } from "@/types/vehicles.types"
import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { Edit } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

interface EditVehicleDialogProps {
    editingVehicle: Vehicle
    onSuccess: () => void
}

export function EditVehicleDialog({ editingVehicle, onSuccess }: EditVehicleDialogProps) {
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting } } = useForm({
            resolver: zodResolver(editVehicleSchema),
            defaultValues: {
                color: editingVehicle.color,
                plate: editingVehicle.plate,
                model: editingVehicle.model
            }
        })

    const onSubmit = async (data: EditVehicleSchema) => {

        try {
            await editVehicle({ id: editingVehicle.id, ...data });
            toast.success("Veículo Editado com sucesso!");
            onSuccess();
            setOpen(false)
            reset();
        } catch (err) {
            if (err instanceof AxiosError) {
                const errorMessage = err.response?.data.message;
                toast.success(errorMessage || "Erro ao editar o Veículo!")
            }
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="icon-sm" variant="outline" className="text-muted-foreground">
                    <Edit />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-106.25">
                <DialogHeader>
                    <DialogTitle>Edite o Veículo</DialogTitle>
                    <DialogDescription>
                        Atualize os dados do Veículo alterando os campos abaixo
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">

                    <Input
                        id="plate"
                        label="Placa"
                        placeholder="RC5D098"
                        error={errors.plate?.message}
                        {...register("plate")}
                    />
                    <Input
                        id="model"
                        label="Modelo"
                        placeholder="ex: Corolla"
                        error={errors.model?.message}
                        {...register("model")}
                    />
                    <Input
                        id="color"
                        label="Cor"
                        placeholder="ex: Vermelho"
                        error={errors.color?.message}
                        {...register("color")}
                    />

                    <DialogFooter className="w-full grid grid-cols-2 mt-4">
                        <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DialogClose>
                        <Button type="submit" disabled={isSubmitting}>{
                            isSubmitting ? (<>
                                <Spinner />
                                Editando...
                            </>) : "Editar Registro"
                        }</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
